import React from 'react';
import { View } from 'react-native';

class Playoffs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sports: [
                {
                    id: 1,
                    name: "Basketball"
                }
            ],
            leagues: [
                {
                    id: 1,
                    name: "nba",
                    sportId: 1,
                }
            ],
            teams: [
                {
                    id: 1,
                    leagues: [1,],
                    name: "L.A Lakers",
                },
                {
                    id: 2,
                    leagues: [1,],
                    name: "L.A Clippers",
                },
                {
                    id: 3,
                    leagues: [1,],
                    name: "Denver Nuggets",
                },
                {
                    id: 4,
                    leagues: [1,],
                    name: "Houston Rockets",
                },
                {
                    id: 5,
                    leagues: [1,],
                    name: "Oklahoma City Thunder",
                },
                {
                    id: 6,
                    leagues: [1,],
                    name: "Uta Jazz",
                },
                {
                    id: 7,
                    leagues: [1,],
                    name: "Dallas Mavericks",
                },
                {
                    id: 8,
                    leagues: [1,],
                    name: "Portland Trail Blazers",
                },
                {
                    id: 9,
                    leagues: [1,],
                    name: "Milwaukee Bucks",
                },
                {
                    id: 10,
                    leagues: [1,],
                    name: "Toronto Raptors",
                },
                {
                    id: 11,
                    leagues: [1,],
                    name: "Boston Celtics",
                },
                {
                    id: 12,
                    leagues: [1,],
                    name: "Indiana Pacers",
                },
                {
                    id: 13,
                    leagues: [1,],
                    name: "Miami Heat",
                },
                {
                    id: 14,
                    leagues: [1,],
                    name: "Philadelphia 76ers",
                },
                {
                    id: 15,
                    leagues: [1,],
                    name: "Brooklyn Nets",
                },
                {
                    id: 16,
                    leagues: [1,],
                    name: "Orlando Magic",
                },
            ],
            playoffs:
            [
                {
                    id: 1,
                    seasionId: 1,
                    leagueId: 1,
                    groups: 
                    [
                        {
                            grouping: "Conference",
                            name: "East",
                            id: 1,
                            rounds: [
                                {
                                    name: "Round 1",
                                    id: 1,
                                    contentions: [
                                        {
                                            id: 1,
                                            teams: [1,8],
                                            winner: 1,
                                            wins: {1: 4, 8: 1},
                                        },
                                        {
                                            id: 2,
                                            teams: [2,7],
                                            winner: 2,
                                            wins: {2: 4, 7: 2},
                                        },
                                        {
                                            id: 3,
                                            teams: [3,6],
                                            winner: 3,
                                            wins: {3: 4, 6: 3},
                                        },
                                        {
                                            id: 4,
                                            teams: [4,5],
                                            winner: 4,
                                            wins: {4: 4, 5: 3},
                                        },
                                        {
                                            id: 5,
                                            teams: [9,16],
                                            winner: 9,
                                            wins: {9: 4, 16: 1},
                                        },
                                        {
                                            id: 6,
                                            teams: [10,15],
                                            winner: 10,
                                            wins: {10: 4, 15: 0},
                                        },
                                        {
                                            id: 7,
                                            teams: [11,14],
                                            winner: 11,
                                            wins: {3: 4, 14: 0},
                                        },
                                        {
                                            id: 8,
                                            teams: [12,13],
                                            winner: 13,
                                            wins: {13: 4, 12: 0},
                                        },

                                    ]

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <View>
                <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
            </View>
        );
    };
}


export default Playoffs;
