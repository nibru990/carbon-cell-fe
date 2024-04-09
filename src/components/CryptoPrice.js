import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Dimmer, Loader, Select } from 'semantic-ui-react'


function CryptoPrice() {
    
    const [loading, setLoading] = useState(true);
    const [priceData, setPriceData] = useState(null);
    const [coin, setCoin] = useState(null);
    
    const options = [{ value: 'USD', text: 'USD'}, {value: 'EUR', text: 'EUR'}, {value: 'GBP', text: 'GBP'}]

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
            const data = await res.json();
            console.log((data));
            setCoin(data.chartName)
            setPriceData(data.bpi);
            setLoading(false);
        }
        fetchData()
    }, [])

    return (
        <div className='CryptoPrice'>
            {
                loading ? (
                    <div>
                        <Dimmer active inverted>
                            <Loader>Loading</Loader>
                        </Dimmer>
                    </div>
                ) : (
                    <>
                        <div className='price-container' style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: 600,
                            height: 300,
                            margin: '0 auto'
                        }}>
                            <div className='price' style={{height: '1vh'}}>
                                <h2>{coin} in multiple currencies</h2>
                                <CardGroup>
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>{priceData['EUR'].description} Price</Card.Header>
                                            <Card.Description>
                                                {priceData['EUR'].rate}
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>{priceData['GBP'].description} Price</Card.Header>
                                            <Card.Description>
                                                {priceData['GBP'].rate}
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>{priceData['USD'].description} Price</Card.Header>
                                            <Card.Description>
                                                {priceData['USD'].rate}
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CryptoPrice