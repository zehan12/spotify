import React from "react"
import NextImage from "next/image";
import NextLink from "next/link"
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { MdHome, MdSearch, MdLibaryMusic, MdPlayListAdd, MdFavorite } from "react-icons/md"

const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        route: "/"
    },
    {
        name: "Search",
        icon: MdSearch,
        route: "/search"
    },
    {
        name: "Your Libary",
        icon: MdLibaryMusic,
        route: '/libary'
    }
]

const musicMenu = [
    {
        name: "Create Playlist",
        icon: MdPlayListAdd,
        route: '/'
    },
    {
        name: "Favorites",
        icon: MdFavorite,
        route: '/favorites'
    }
]

const playlists = new Array(30).fill(1).map((_,i)=>`Playlist ${i+1}`)

const Sidebar = () => {
    return (
        <Box
            width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="gray"
        >
            <Box
                height="100%"
                paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px"
                >
                    <NextImage src="/logo.svg" height={60} width={120} />
                    <p>Spotify</p>
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {navMenu.map(menu => (
                            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>

                                        <LinkOverlay>
                                            <ListIcon
                                                as={menu.icon}
                                                color="white"
                                                marginRight="20px" />
                                            {menu.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>

                </Box>
                <Divider color="gray.800" />
                <Box marginTop="20px" >
                    <List spacing={2}>
                        {
                            musicMenu.map(menu => (
                                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                    <LinkBox>
                                        <NextLink href={menu.route} passHref>

                                            <LinkOverlay>
                                                <ListIcon
                                                    as={menu.icon}
                                                    color="white"
                                                    marginRight="20px" />
                                                {menu.name}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>

                            ))
                        }
                    </List>
                </Box>
                <Divider color="gray.800" />
<Box height="66%" overflowY="auto" paddingY="20px">
<List spacing={2} >
    { 
        playlists.map(playlist=>(
            <ListItem paddingX="20px" key={playlist} >
                <NextLink href="/">
                    <LinkOverlay>
                    {playlist}
                    </LinkOverlay>

                </NextLink>

            </ListItem>
        ))
    }
</List>

</Box>
            </Box>
        </Box>
    )
}

export default Sidebar