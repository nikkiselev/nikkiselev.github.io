import { Grid, Typography, Box } from '@material-ui/core'

const FooterBar = () => {
  return (
    <Box>
      <Grid container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={100}
          color="white"
          bgcolor="#000"
          clone
        >
          <Grid item xs={12}>
            <Typography component="div">
              &copy; {new Date().getFullYear()} Nikolai Kiselev
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default FooterBar
