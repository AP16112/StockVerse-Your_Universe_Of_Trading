// Here we are creating this 'Brokerage' component to be used in the pricing page of our application. It will provide users with information about our brokerage services and pricing options.


export default function Brokerage() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-3 border-top">
                <div className="col-12 mb-3">
                    <h2 className="fs-2 mb-3"  style={{textDecoration:"none", color:'#387ed1', textAlign:"center"}}>Brokerage & Charges</h2>
                    <p style={{fontSize: "18px", margin: "0", textAlign: "center"}}>
                        These examples are based on brokerage calculations used by real trading platforms, including minimum-fee and percentage-based rules for intraday, F&O, and delivery trades.
                    </p>
                </div>
                <div className="col-md-6 p-4 text-center">
                    <a href=""  style={{textDecoration:"none", color:'#387ed1'}}><h3 className="fs-5 mb-3">Brokerage calculator</h3></a>

                    <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}>
                        <li>Intraday trade example: a ₹50,000 order at 0.03% = ₹15. With a minimum brokerage floor of ₹20, the platform charge becomes ₹20.</li>
                        <li>F&O notional example: a ₹2,00,000 order at 0.03% = ₹60. Since this is above the ₹20 floor, the brokerage charge is ₹60.</li>
                        <li>Delivery equity example: a ₹75,000 buy order is shown as ₹0 brokerage, reflecting commission-free delivery plans.
                        </li>
                        <li>GST and exchange levies are shown informatively in the demo, though they do not deduct real funds.</li>
                        <li>Contract note example: digital note is ₹0, physical note is ₹20 plus courier fees when requested.</li>
                        <li>Call & Trade / auto-squareoff sample: ₹50 + GST per order, as typical for assisted orders or forced square-offs.</li>
                    </ul>
                </div>

                <div className="col-md-6 p-4 text-center">
                    <a href=""  style={{textDecoration:"none", color:'#387ed1'}}><h3 className="fs-5 mb-3">List of charges</h3></a>
                    <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}>
                        <li>Intraday / F&O brokerage: min(₹20, 0.03% of trade value).</li>
                        <li>Equity delivery brokerage: ₹0 for demo delivery trades, matching modern commission-free plans.</li>
                        <li>Call & Trade / auto-squareoff: ₹50 + GST per order in assisted or emergency cases.</li>
                        <li>Digital contract note: ₹0; physical contract note: ₹20 plus courier charges.</li>
                        <li>NRI equity orders: sample ₹100 or 0.5% per order, whichever is lower, shown for learning.</li>
                        <li>Debit balance order example: ₹40 per executed order instead of ₹20 when the account carries a debit balance.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

