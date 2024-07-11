// ICONS
import {
    MdShop,
} from "react-icons/md"

export default (S: any) =>
    S.list()
        .title("Fuerte Shop")
        .items([
            S.listItem()
                .title('Products')
                .icon(MdShop)
                .child(
                    S.documentList()
                        .title('Products')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'product' })
                ),
        ]);