import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";
import { cleanupExpiredBookings } from "./bookingController.js";

// API controller function to get User Bookings
export const getUserBookings = async (req, res) => {
  try {
    await cleanupExpiredBookings();
    const userId = req.auth().userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please sign in again.",
      });
    }

    const bookings = await Booking.find({ user: userId })
      .populate({
        path: "show",
        populate: { path: "movie" },
      })
      .sort({ createdAt: -1 });

    const activeBookings = bookings.filter((booking) => {
      if (!booking.show || !booking.show.movie) return false;
      const showStartTime = new Date(booking.show.showDateTime).getTime();
      const movieRuntime = booking.show.movie.runtime || 120;
      const showEndTime = showStartTime + movieRuntime * 60 * 1000;
      return showEndTime > Date.now();
    });

    res.json({
      success: true,
      bookings: activeBookings,
    });
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API Controller function to update favorite movie in clerk user metadata
export const updateFavorite = async (req, res) => {
  try {
    const { movieId } = req.body;
    const userId = req.auth().userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please sign in again.",
      });
    }

    const user = await clerkClient.users.getUser(userId);

    const favorites = user.privateMetadata.favorites || [];

    let updatedFavorites;

    if (favorites.includes(movieId)) {
      updatedFavorites = favorites.filter((item) => item !== movieId);
    } else {
      updatedFavorites = [...favorites, movieId];
    }

    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        ...user.privateMetadata,
        favorites: updatedFavorites,
      },
    });

    res.json({
      success: true,
      message: "Favorite Movies Updated",
    });
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API controller function to get favorite movies
export const getFavorites = async (req, res) => {
  try {
    const userId = req.auth().userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please sign in again.",
      });
    }

    const user = await clerkClient.users.getUser(userId);

    const favorites = user.privateMetadata.favorites || [];

    const movies = await Movie.find({
      _id: { $in: favorites },
    });

    res.json({
      success: true,
      movies,
    });
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};