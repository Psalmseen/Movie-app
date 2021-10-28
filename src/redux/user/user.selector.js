import { createStructuredSelector } from "reselect";

const user = (state) => state.user;

export const currentUser = createStructuredSelector(user, (user) => user.currentUser);
