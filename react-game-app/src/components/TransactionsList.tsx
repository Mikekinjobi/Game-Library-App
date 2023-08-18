
export interface transaction {
    user: string;
    userTotalBalance: number;
    otherUser: string;
    amount: number;
    type: string;
    date: Date;
    id: string;
}

interface Props {
    userTransactions: transaction[];
}

export default function TransactionsList({ userTransactions }: Props) {
    
    return (
      <div>
        <h1>Transactions</h1>
        <input type="text" placeholder="Search"  />
      <ul className="list-group">
        <div className="d-flex p-2 justify-content-start">
            <h6 className="p-2">All</h6>
            <h6 className="p-2">Expenses</h6>
            <h6 className="p-2">Income</h6>
        </div>
        <div>
        {userTransactions.map((transaction) => (
          <li
            key={transaction.id}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            // onClick={() => {
            //   setSelectedIndex(index);
            //   onSelectItem(item);
            // }}
          >
            <div className="d-flex p-2 justify-content-between">
            <div>
            <h4>{transaction.otherUser}</h4>
            {transaction.type}
            </div>
            <div>
            <h4>{transaction.amount}</h4>
            {transaction.userTotalBalance}
            </div>
            </div>
          </li>
        ))}
        </div>
      </ul>
      </div>
    );
  }