import { Grid, createStyles, makeStyles, Typography } from '@material-ui/core'
import styles from '../../css/index.module.scss'
import FooterBar from './FooterBar'

const useStyles = makeStyles(() => createStyles({}))

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={styles.work}>
          <h3>Work with me</h3>
          <p>
            I'm a practical person so if you have a cool project to work on or
            share the feeling that I could be a good fit with your team, reach
            out and let's have a chat!
          </p>
          <div className={styles.workEmail}>
            <img src="/images/mail_icon.png" className={styles.mail} />
            <a href="mailto:nik@kiselev.dev">nik@kiselev.dev</a>
          </div>
        </Grid>
        <Grid item xs={12} className={styles.links}>
          <p className={styles.profileText}>I'm also on</p>

          <a
            className={styles.profileLink}
            href="https://github.com/nikkiselev"
          >
            GitHub
          </a>
          <a
            className={styles.profileLink}
            href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
          >
            Stack Overflow
          </a>
        </Grid>
      </Grid>

      <FooterBar />
    </>
  )
}

export default Footer
