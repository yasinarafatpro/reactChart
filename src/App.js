
import Body from './layout/Body';
import { AppBar, Button } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from './component/Search';
import { useState } from 'react';
import AddProduct from './component/AddProduct';
function App() {
  const [active, setActive] = useState("y");

  return (
    <div className="App">
      <div>
        <div>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant="h6"
                component="div" sx={{ flexGrow: 1 }}> Logo </Typography>
              <div>
                <Search />
              </div>
              <div>
                <div>
                  <div className='button'>
                    <Button color="inherit" onClick={() => setActive("F")}>Add Product</Button>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <div>

      </div>
      <Body />
      <div>
        {active === "F" && <AddProduct product='sumsung' />}
      </div>
      <div style={{ paddingLeft: '100px' }}>
      </div>
    </div>

  );
}
export default App;
