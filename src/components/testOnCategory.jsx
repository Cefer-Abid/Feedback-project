import { StyledTest } from "./styles/test.styled"

function TestOnCategory (){
    const x = false
    return(
        <StyledTest bg={x?"blue":"green"}>
            <h1 className="title">
                hello
            </h1>
        </StyledTest>
    )
}

export default TestOnCategory