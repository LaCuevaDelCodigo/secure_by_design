import { FC, useState } from "react"
import { InputName } from "../components/InputName"
import { InputEmail } from "../components/InputEmail"
import { Container, Flex, Space } from "@mantine/core"

export const HomePage: FC<{}> = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <Container>
            <Space h="xl" />
            <Space h="xl" />

            <Flex
                justify="space-around"
            >
                <InputName
                    onChange={setName}
                    label="Nombre"
                    placeholder="ej: Pepe"
                    value={name}
                />

                <InputEmail
                    onChange={setEmail}
                    value={email}
                />
            </Flex>
        </Container>
    )
}