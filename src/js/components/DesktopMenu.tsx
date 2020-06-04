import { Box } from '@material-ui/core'
import content from '../../content/home.json'
import { MenuItem } from '../../types'
import DesktopMenuItem from './DesktopMenuItem'

const DesktopMenu = () => (
  <Box display={{ xs: 'none', md: 'block' }}>
    {content.menu.map((i: MenuItem) => (
      <DesktopMenuItem {...i} />
    ))}
  </Box>
)

export default DesktopMenu
