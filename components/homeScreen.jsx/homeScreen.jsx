import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function HomeScreen(props) {
    return <View style={styles.container}>
        <View style={styles.header_wrpr}>
            <Text style={styles.header}>
                {"Code Snippets"}
                <Text style={styles.clorb}>
                    {" </>"}
                </Text>
            </Text>
        </View>
        <View style={styles.statustxt}>
            <Text style={styles.clorwht}>Currenltly there are <Text style={{ ...styles.clorgreen, ...styles.statushltxt }}>1023</Text> code snippets available</Text>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    header_wrpr: {
        marginTop: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        height: 50,
        display: 'flex',
        width:"100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },

    header: {
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 18,
        color: '#BC9F36',


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,


    },

    clorb: {
        color: "rgba(44, 93, 187, 0.87)"
    },

    clorwht: {
        color: '#fff'
    },

    clorgreen: {
        color: "rgba(52, 255, 19, 1)"
    },

    statustxt: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 357,
        height: 80,
        marginTop:15,
        backgroundColor: "rgba(29, 74, 191, 1)",
        borderRadius: 12,
    },

    statusNormtxt: {
        fontFamily: "TharLon",
        fontWeight: "400",
        Size: 18

    },

    statushltxt: {
        fontFamily: "Ubuntu",
        fontWeight: "700",
        fontSize: 24
    }
});