import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Button from './Components/Button';

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595',
};

function App() {
    return (
        <ThemeProvider
            theme={{
                palette,
            }}
        >
            <AppBlock>
                <ButtonGroup>
                    <Button size="large" color="pink">
                        Button
                    </Button>
                    <Button>Button</Button>
                    <Button size="small" color="gray">
                        Button
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button color="pink" size="large" outline>
                        Button
                    </Button>
                    <Button outline>Button</Button>
                    <Button size="small" color="gray" outline>
                        Button
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button size="large" fullWidth>
                        Button
                    </Button>
                    <Button color="gray" size="large" fullWidth>
                        Button
                    </Button>
                    <Button color="pink" size="large" fullWidth>
                        Button
                    </Button>
                </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
    );
}

export default App;
