import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

const NavBar= () => {
    return (
        <Nav
            expandedStateText="expanded"
            collapsedStateText="collapsed"
            selectedKey="key3"
            expandButtonAriaLabel="Expand or collapse"
            styles={{
                root: {
                    width: 208,
                    height: 350,
                    boxSizing: 'border-box',
                    border: '1px solid #eee',
                    overflowY: 'auto'
                }
            }}
            groups={[
                {
                    links: [
                        {
                            name: 'Home',
                            links: [
                                {
                                    name: 'Activity',
                                    key: 'key1'
                                },
                                {
                                    name: 'MSN',
                                    disabled: true,
                                    key: 'key2'
                                }
                            ],
                            isExpanded: true
                        },
                        {
                            name: 'Documents',
                            key: 'key3',
                            isExpanded: true
                        },
                        {
                            name: 'Pages',
                            key: 'key4'
                        },
                        {
                            name: 'Notebook',
                            key: 'key5',
                            disabled: true
                        },
                        {
                            name: 'Communication and Media',
                            key: 'key6'
                        },
                        {
                            name: 'News',
                            key: 'key7'
                        }
                    ]
                }
            ]}
        />
    );
};

export default NavBar;