import { Box, useMediaQuery } from "@mui/material"
import Navbar from "./scenes/navbar"
import { useSelector } from "react-redux"
import UserWidget from "widgets/userWidgets"

export const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
    const {_id, picturePath } = useSelector((state) => state.user)
    return (
        <div>
            <Box>
                <Navbar>
                    <Box
                        width="100%"
                        padding="2rem 6%"
                        display={isNonMobileScreens ? "flex" : "block"}
                        gap="0.5rem"
                        justifyContent="space-between"
                    >
                        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                            <UserWidget></UserWidget>
                        </Box>

                    </Box>

                </Navbar>
            </Box>

        </div>
    )
}