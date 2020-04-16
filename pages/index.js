import useSWR from 'swr';
import fetch from 'unfetch';
import columns from '../components/DataTableColumns';
import DataTable from 'react-data-table-component';
import Loading from '../components/Loading';
//import FlippingCard from 'react-ui-cards';
import DataChart from '../components/DataChart';
import TimeSeriesChart from '../components/TimeSeriesChart';
const apiUrl = "https://api.covid19api.com/summary";
const timeseriesUrl = "https://pomber.github.io/covid19/timeseries.json";
const fetcher = url => fetch(url).then(r => r.json());
//const fetcher = url => axios.get(url);
const IndexPage = () => {
    const { data, error } = useSWR(apiUrl, fetcher); // success => data error => error
    const { data: timeseries } = useSWR(timeseriesUrl, fetcher); // success =>
    if (!data) {
        return (
        <Loading />
        );
    }

    if (error) {
        return <p>Error.....</p>
    }

    console.log('timeseries', timeseries.America)
    console.log('timeseries', timeseries)
    return (
        <div className="container">
            <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
                *{
                    font-family: 'Comic Neue', sans-serif;
                }
                .container {
                    width: 820px;
                    margin: 0 auto;
                }
                .title{
                    text-align: center;
                }
                  
            `}</style>

            <h2 className="title">COVID-19 Realtime</h2>
            <DataTable
                title="COVID-19  Summary"
                columns={columns}
                data={data.Countries}
                pagination={true}
            />
            {/* <p>{JSON.stringify(data)}</p> */}
            <TimeSeriesChart data={timeseries.Thailand} title="Thailand" />
            <TimeSeriesChart data={timeseries.US} title="US" />
            <DataChart data={data.Countries} title="In the world" />


            {/* <FlippingCard>
                            <FlippingCardBack>
                                Content that will be displayed on the back of the card
                </FlippingCardBack>
                            <FlippingCardFront>
                                Content that will be displayed on the front of the card
                </FlippingCardFront>
            </FlippingCard>
*/ }
        </div>

    );
};

export default IndexPage;