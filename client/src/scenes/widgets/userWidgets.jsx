import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material"
import { Box, Typography, Divider, useTheme } from "@mui/material"
import UserImage from "../../components/userImage"
import FlexBetween from "../../components/flexBetween"
import WidgetWrapper from "../../components/widgetWrapper"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserWidget = ({userId, picturePath}) => {
    const [user, setUser] = useState(null)
    const {palette} = useTheme()
    const navigate = useNavigte()
    const token = useSelector((state)=> state.token)
    const dark = palette.neutral.dark
    const medium = palette.neutral.medium
    const main = palette.neutral.main

    const getUser = async () => {
        const response = await fetch(`http://locahost:3001/users/${userId}`)
        {
            method: "GET";
            headers: { Authorization: `Bearer ${token}` }
        }
        const data = await response.json()
        setUser(data)
    }
    useEffect (() => {
        getUser()
    }, [])

    if(!user){
        return null
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends
    } = user

    return (
        <WidgetWrapper>
            {}
            <FlexBetween
            gap="0.5rem"
            pb="1.1rem"
            onClick={() => navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath}>
                        <Box>
                            <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                color: palette.primary.light,
                                cursor: pointer
                                }
                            }}>
                                { firstName } { lastName }
                            </Typography>
                            <Typography color={medium}>{friends.length}</Typography>
                        </Box>
                        <ManageAccountsOutlined/>
                    </UserImage>
                </FlexBetween>

                <Divider/>
                {}
                    <Box p="1rem 0">
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <LocationOnOutlined fontSize="large " sx={{ color: main}}/>
                            <Typography color={medium} > {location}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <LocationOnOutlined fontSize="large " sx={{ color: main}}/>
                            <Typography color={medium} > {occupation}</Typography>
                        </Box>
                    </Box>
                    <Box p="1rem 0">
                        <FlexBetween mb="0.5rem">
                            <Typography color={medium}> Who's viewed your profile</Typography>
                            <Typography color={medium} fontWeight="500">
                                {viewedProfile}
                            </Typography>
                        </FlexBetween>
                        <FlexBetween mb="0.5rem">
                            <Typography color={medium}> Impressions of your post</Typography>
                            <Typography color={medium} fontWeight="500">
                                {impressions}
                            </Typography>
                        </FlexBetween>
                    </Box>
                    <Box>
                        <Typography fontSize="1rem" color="medium" fontWeight="500" mb="1rem">
                            Social Profiles
                        </Typography>

                        <FlexBetween gap="1rem" mb="0.5rem">
                            <FlexBetween gap="1rem">
                                <img src="../assets/twitter.png" alt="twitter"></img>
                                <Box>
                                    <Typography color={main} fontWeight="500">
                                            Twitter
                                    </Typography>
                                    <Typography color={medium}>     
                                        Social Network
                                    </Typography>
                                </Box>
                            </FlexBetween>
                            <EditOutlined sx={{ color: main}}/>
                        </FlexBetween>

                        <FlexBetween gap="1rem" >
                            <FlexBetween gap="1rem">
                                <img src="../assets/linkedin.png" alt="linkedin"></img>
                                <Box>
                                    <Typography color={main} fontWeight="500">
                                            Linkedin
                                    </Typography>
                                    <Typography color={medium}>     
                                        Network Platform
                                    </Typography>
                                </Box>
                            </FlexBetween>
                            <EditOutlined sx={{ color: main}}/>
                        </FlexBetween>

                    </Box>           
            </FlexBetween>
        </WidgetWrapper>

    )
}

export default UserWidget