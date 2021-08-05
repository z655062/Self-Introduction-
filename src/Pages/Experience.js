import React, { useCallback, useContext, useState, useEffect } from 'react';
import { Container, Expansion, Text } from "../BasicComponent"
import db from '../Firebase.config';

const ExperienceComponent = (props) => {
    const [ExperienceData, setExperienceData] = useState([])

    const fetchExperienceData = async () => {
        const experienceTable = db.database().ref("experience")
        experienceTable.on('value', (snapshot) => {
            // snapshot.forEach((item)=>{
            //     console.log(item.key);
            //     console.log(item.val())
            // })
            // console.log(snapshot)
            const data = snapshot.val();
            setExperienceData(data);
            // console.log(data);
        });
        // const response = db.collection('Basic');
        // const data = await response.get();
        // console.log(data)
    }

    useEffect(() => {
        fetchExperienceData();
    }, [])

    return (

        <>
            <Container
                style={{
                    display: "block",
                    padding: "24px 15%",
                    width: "auto"
                }}
            >
                {/* 展開容器 */}
                <Expansion
                    title={"學歷"}
                >
                    <Container
                        style={{
                            padding: "12px 0",
                            flexDirection: "column"
                        }}
                    >
                        {

                            Object.entries(ExperienceData?.education ?? {}).map((item) => {
                                const [key, data] = item;
                                return (
                                    <Text
                                        style={{
                                            justifyContent: "flex-start",
                                            padding: "0 0 0 10%",
                                            margin: "8px 0"
                                        }}
                                    >
                                        {`${data[0]} ${data[1]}`}
                                    </Text>
                                )
                            })
                        }

                    </Container>
                </Expansion>

                {/* 展開容器 */}
                <Expansion
                    title={"工作經歷"}
                >
                    {

                        Object.entries(ExperienceData?.workExperience ?? {}).map((item) => {
                            const [key, data] = item;
                            console.log(key, data)
                            return (
                                <Text
                                    style={{
                                        justifyContent: "flex-start",
                                        padding: "0 0 0 10%",
                                        margin: "8px 0"
                                    }}
                                >
                                    {`${key}`}
                                </Text>
                            )
                        })
                    }
                </Expansion>
            </Container>
        </>
    )
}

export const Experience = ExperienceComponent