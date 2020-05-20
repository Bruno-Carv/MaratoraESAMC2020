import React from 'react';
import { View, Text } from './styles';
import { List } from 'react-native-paper';

export default function Community() {
    return (
        <List.AccordionGroup>
            <List.Accordion title="Accordion 1" id="1">
                <List.Item title="Item 1" />
            </List.Accordion>
            <List.Accordion title="Accordion 2" id="2">
                <List.Item title="Item 2" />
            </List.Accordion>
            <View>
                <Text>
                    List.Accordion can be wrapped because implementation uses React.Context.
                </Text>
                <List.Accordion title="Accordion 3" id="3">
                    <List.Item title="Item 3" />
                </List.Accordion>
            </View>
        </List.AccordionGroup>
    );
}