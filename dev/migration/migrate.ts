import { createItems } from "./tables/table_items";
import { createToken } from "./tables/table_tokens";
import { createUser } from "./tables/table_users"

export default function migrate() {
    createUser();
    createToken();
    createItems();
}