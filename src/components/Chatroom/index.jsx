import React from "react"

import { MessageInput } from "../MessageInput"
import { MessageList } from "../MessageList"

import Container from '@mui/material/Container'

function ChatRoom() {

    return (
        <Container maxWidth='md' sx={{mt: '-20px', mb: '20px'}}>
            <MessageList roomID='general'/>
            <MessageInput />
        </Container>
    )
}

export { ChatRoom }