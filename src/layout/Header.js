import { AppBar, Button } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from '../component/Search';
import MyButton from '../component/Button';

const Header = ({ value, button }) => {

  return (
    <div>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6"
              component="div" sx={{ flexGrow: 1 }}> Logo </Typography>
            <div>
              {value === 'appheader' ? <Search /> : null}
            </div>
            <div>
              < MyButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
export default Header