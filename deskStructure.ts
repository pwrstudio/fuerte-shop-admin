// ICONS
import {
    MdShop,
    MdPages,
    MdHome
} from "react-icons/md"

export default (S: any) =>
    S.list()
        .title("Fuerte Shop")
        .items([
            S.listItem()
                .title("Landing page layout")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id('landing-page')
                        .schemaType("landingPage")
                        .documentId("landing-page")
                ),
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
            S.listItem()
                .title('Pages')
                .icon(MdPages)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'page' })
                ),
        ]);