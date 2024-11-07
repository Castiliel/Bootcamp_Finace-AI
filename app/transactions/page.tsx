import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="p-6">
      {/* TITULO E BOTÃO */}
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full bg-primary">
          Adicionar transação
          <ArrowDownUp />
        </Button>
      </div>

      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
