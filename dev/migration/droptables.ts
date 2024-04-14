import { dropItems } from "./tables/table_items";
import { dropToken } from "./tables/table_tokens";
import { dropUser } from "./tables/table_users";

export default function droptables() {
    dropUser();
    dropToken();
    dropItems();
}
