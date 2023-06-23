import { PersonAddOutlined, PersonRemoveOutlined} from "@mui/icons-material"
import { Box, IconButton, Typography, useTheme} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setFriends } from "../state"
import FlexBetween from "../components/flexBetween"
import UserImage from "../components/userImage"
import { useNavigate } from "react-router-dom"

const Friend = ({friendId, name, subtitle, usePicturePath}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { _id } = useSelector((state)=>state._id)
    const token = useSelector((state)=> state.token)
    const friends = useSelector((state)=> state.user.friend)

    const { palette } = useTheme()
    const primaryLight = palette.primary.light
    const main = palette.neutral.light
    const medium = palette.neutral.medium

    const isFriend = friends.find((friend) => friend._id === friendId)

    const patchFriend = async () => {
        const response = await fetch(
          `http://localhost:3001/users/${_id}/${friendId}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        const data = await response.json()
        dispatch(setFriends({ friends: data }))
      }

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage size="55px" image={userPicturePath}/>
                <Box
                onClick={()=>{
                    navigate(`/profile/${friendId}`)
                    navigate(0)
                }}
                >
                    <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: palette.primary.light,
                                cursor: pointer
                            }
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography color={medium} fontSize="0.75rem">
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            <IconButton
                onClick={()=> patchFriend()}
                sx={{backgroundColor: primaryLight, p: "0.6rem"}}
            >
                {isFriend ? (
                    <PersonRemoveOutlined sx={{ color: primaryDark }}/>
                ) : (
                    <PersonAddOutlined sx={{primaryDark}}/>
                )}  
            </IconButton>
        </FlexBetween>
    )

}

export default Friend