import User from "../models/User.js";
import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "movie-ticket-booking" });


// Inngest function to save user data to a database
const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-from-clerk",
        triggers: [{ event: "clerk.user.created" }]
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;

        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: email_addresses[0].email_address,
            image: image_url
        };

        await User.create(userData);
        console.log(userData);
    }
);

//inngest function to delete user from database

const syncUserDeletion = inngest.createFunction(
    {
        id: "delete-user-from-clerk",
        triggers: [{ event: "clerk.user.deleted" }]
    },
    async ({ event }) => {
        const { id } = event.data;
        await User.findByIdAndDelete(id);
    }
);

// Inngest function to update user data in the database when user updates their profile in Clerk
const syncUserUpdate = inngest.createFunction(
    {
        id: "update-user-in-clerk",
        triggers: [{ event: "clerk.user.updated" }]
    },
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url} = event.data;
        const userData ={
            _id:id,
            email: email_addresses[0].email_address,
            name: `${first_name} ${last_name}`,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userData);
        console.log(`User with id ${id} updated in database`);
    }
)

export const functions = [syncUserCreation,syncUserDeletion,syncUserUpdate];