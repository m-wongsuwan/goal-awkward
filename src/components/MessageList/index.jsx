import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useMessages } from '../../hooks/useMessages'

import { SizingContext } from '../../context/sizing'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { useTheme } from '@mui/material/styles'

function MessageList({ roomID }) {
    const theme = useTheme()

    const containerRef = React.useRef(null);
    const { user } = useAuth()
    const messages = useMessages(roomID)

    const {appBarHeight} = React.useContext(SizingContext)

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    })

    function Message({ message, isOwnMessage }) {
        const { displayName, text } = message;
        return (
            <ListItem className={['message', isOwnMessage && 'own-message'].join(' ')}>
                <ListItemText
                    primary={text}
                    secondary={isOwnMessage ? 'You' : displayName}
                    sx={{
                        textAlign: isOwnMessage ? 'right' : 'left',
                        backgroundColor: isOwnMessage ? theme.palette.primary.main : theme.palette.secondary.light,
                        color: isOwnMessage ? theme.palette.primary.contrastText : theme.palette.secondary.contrastTex,
                        marginLeft: isOwnMessage ? 12 : null,
                        marginRight: !isOwnMessage ? 12 : null,
                        p: 2,
                        borderRadius: '5px'
                    }}
                />
            </ListItem>
        )
    }

    return (
        <Box 
            component='div'
            ref={containerRef}
            className='message-list-container'
            sx={{
                height: `${window.innerHeight - appBarHeight - 55}px`,
                overflow: 'auto',
                flex: 1
            }}
        >
            <List 
                className='message-list'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                {messages.map((x) => (
                    <Message 
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === user.uid}
                    />
                ))}
            </List>

        </Box>
    )

}

export { MessageList }