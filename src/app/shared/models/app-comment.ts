export interface AppComment{
    id?: number; // To identifier a comment, because  we can have many
    author?: string; // To specify who comments a post -->

    createdDate?: Date; // To store when  the author wrote  his comments

    msg?: string; //  To Get or set the message as comment
    email?: string; // to gspecify the email of the commenter
}