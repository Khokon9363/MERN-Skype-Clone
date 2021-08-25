import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AttachmentIcon from '@material-ui/icons/Attachment'
import SendIcon from '@material-ui/icons/Send'
import { useEffect, useRef } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    chatSection: {
        background: '#f9f2f2', height: '76.5vh', overflowY: 'scroll'
    },
    inputSection: {
        height: '11vh'
    },
    inputIcons: {
        marginTop: '20%', cursor: 'pointer', fontSize: '45px'
    },
    messageLeft: {
        marginTop: '10px',
        width: '70%',
        backgroundColor: 'cyan',
        padding: '10px',
        borderRadius: '0 10px 10px 0',
        fontFamily: 'cursive',
        clear: 'both'
    },
    messageRight: {
        marginTop: '10px',
        marginBottom: '10px',
        width: '70%',
        textAlign: 'right',
        float: 'right',
        backgroundColor: '#0df2fd',
        padding: '10px',
        borderRadius: '10px 0 0 10px',
        fontFamily: 'cursive'
    }
  }))

export default function ChatComponent() {
    const classes = useStyles()
    
    const lastMessage = useRef(null)

    useEffect(() => {
        lastMessage.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    })
    return(
        <>
            <Container maxWidth="xl" className={ classes.chatSection }>
                <div className={classes.messageLeft}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageRight}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageLeft}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageRight}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageLeft}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageRight}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageLeft}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageRight}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageLeft}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageRight}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
                <div className={classes.messageRight} ref={lastMessage}>
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                    Hello world ! Hello world ! Hello world ! Hello world !Hello world !Hello world !Hello world !Hello world ! Hello world !
                </div>
            </Container>
            <Container className={ classes.inputSection }>
                <form className={classes.root} noValidate>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <AttachmentIcon className={ classes.inputIcons } />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            style={ {width: '100%'} }
                            id="outlined-multiline-static"
                            label="Write here your message.."
                            multiline
                            rows={1}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <SendIcon className={ classes.inputIcons } />
                    </Grid>
                </Grid>
                </form>
            </Container>
        </>
    )
}