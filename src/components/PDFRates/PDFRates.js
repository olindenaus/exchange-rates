import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { faColumns } from '@fortawesome/free-solid-svg-icons';


const styles = StyleSheet.styles = ({
    page: {
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    header: {
        marginBottom: 20,
        textAlign: 'center'
    }, 
    title: {
        fontSize: 24,
        textAlign: 'center',
    }
})

export default class PDFRates extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const ratesTable = this.props.data.map((rate)=>{
            return <Text key={rate.name}>{rate.name} --->>> {rate.value}</Text>
        });
        

        return (
            <Document >
                <Page size="A4" style={styles.page}>
                    <Text style={styles.header} fixed>
                        ~ Created with react-pdf ~
                    </Text>
                    <Text style={styles.title} >
                        {`${this.props.upperCur} price against ${this.props.lowerCur}`}
                    </Text>
                    <Text style={styles.title}></Text>
                    <View>
                        {ratesTable}
                    </View>
                </Page>
            </Document>
        )
    }
}


