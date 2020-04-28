import { useEffect } from 'react'
import styles from '../css/index.module.scss'
import {
  Container,
  Grid,
  Divider,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 'bold',
      fontSize: '26px',
      marginBottom: '30px',
    },
    subTitle: {
      fontWeight: 'bold',
      letterSpacing: 7,
    },
  })
)

const Home = () => {
  const classes = useStyles()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // @ts-ignore
      window.dataLayer = window.dataLayer || []

      // @ts-ignore
      function gtag() {
        // @ts-ignore
        dataLayer.push(arguments)
      }
      // @ts-ignore
      gtag('js', new Date())

      // @ts-ignore
      gtag('config', 'UA-135544092-1')
    }
  }, [])

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} className={styles.subHeader}>
          <Typography variant="h4" className={classes.title}>
            Hi, I'm Nikolai
          </Typography>

          <Typography variant="subtitle1" className={classes.subTitle}>
            A full stack
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle}>
            web developer
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <Grid container>
        <Grid item xs={12} className={styles.intro}>
          <img src="/images/screen_icon.png" className={styles.screen} />
          <p>
            I still remember writing small scripts and apps using Pascal when I
            was 12 years old just for fun. Fast forward to today, I cannot see
            myself doing anything else but web development.
          </p>
          <p>
            As a full stack developer, I can build seamless & scalable web
            applications, websites. Whether it’s from scratch or an existing
            codebase, I’m ready to jump in.
          </p>
          <span className="secondary">
            <img src="/images/pin_icon.png" className={styles.pin} />
            Kuala Lumpur, Malaysia (GMT+8)
          </span>
        </Grid>
      </Grid>

      <Divider />
    </Container>
  )
}

export default Home
