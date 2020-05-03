import { Box, createStyles, makeStyles, Link } from '@material-ui/core'
import menu from '../../data/menu'
import { MenuItem } from '../../types'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      textTransform: 'initial',
      fontWeight: 'normal',
    },
  })
)

const DesktopMenu = () => {
  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      {menu.map((i: MenuItem) => (
        <Box ml={5} display="inline-flex" key={i.id}>
          <Link
            href={i.href}
            key={i.id}
            className={classes.button}
            color="textPrimary"
          >
            {i.label}
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default DesktopMenu
