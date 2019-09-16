import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { faColumns } from '@fortawesome/free-solid-svg-icons';


const styles = StyleSheet.styles = ({
    page: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
})

export default class PDFRates extends Component {
    constructor(props){
        super(props);
    }



    render() {
        // const ratesTable = this.props.rates.map((id)=>{
        //     return <Text><
        // });
        console.log(this.props.propa);
        console.log(this.props.propb);

        return (
            <Document >
                <Page size="A4" style={styles.page}>
                    <View>
                        <Text>jakis losowy tekst</Text>
                        <Text>jakis losowy tekst</Text>
                        <Text>jakis losowy tekst</Text>
                        <Text>jakis losowy tekst</Text>
                        <Text>jakis losowy tekst</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}


