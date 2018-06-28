import * as React from 'react';
import { FortuneCard } from './Cards/FortuneCard';
import { Col, Grid, Row } from 'react-bootstrap';
import { TotalExpensesCard } from './Cards/TotalExpensesCard';
import { AppState } from '../../state/AppState';
import { connect } from 'react-redux';
import { InventoryValueCard } from './Cards/InventoryValueCard';
import { StockTile } from '../../components/StockTile/StockTile';

interface AccountProps {
    fortune: number;
    totalIncome: number;
    totalExpenses: number;
    inventoryValue: number;
}

interface AccountState {
}

class Account extends React.Component<AccountProps, AccountState> {

    constructor( props: AccountProps ) {
        super( props );
    }

    render() {
        const {fortune, totalExpenses, inventoryValue} = this.props;
        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <FortuneCard value={fortune}/>
                        </Col>
                        <Col lg={6} sm={6}>
                           <StockTile title={'Microsoft'} total={4134} value={22.4} count={4} type={'Technology'}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <TotalExpensesCard value={totalExpenses}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <InventoryValueCard value={inventoryValue}/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({

    })
;

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Account );