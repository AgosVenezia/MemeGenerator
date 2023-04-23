import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {

    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

    return (
    <>
        <Navbar bg="white" variant="white">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="Trollface meme"
                    src="../memesImg/icon.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    {tab}Meme Generator
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Created by: <a href="https://github.com/AgosVenezia" target='blank'>Agostina Venezia</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default BrandExample;