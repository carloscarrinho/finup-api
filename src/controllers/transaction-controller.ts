import { Request, Response } from "express";

export default class TransactionController {
  async index(req: Request, res: Response): Promise<Response> {
    const token = req.headers?.["x-access-token"];
    if (!token)
      return res.status(401).json({
        code: 401,
        error: "Unauthorized",
        message: "No token provided.",
      });

    if (token === "invalid-token")
      return res.status(401).json({
        code: 401,
        error: "Unauthorized",
        message: "Invalid token provided.",
      });

    return res.status(200).json({
      entries: [
        {
          day: "2021-06-02",
          transactions: [
            {
              description: "Corte de Cabelo",
              isPaid: true,
              type: "expense",
              category: "Barbearia",
              value: "30.00",
              payment_date: "2021-06-02T00:00:00+00:00",
              accrual_date: "2021-06-02T00:00:00+00:00",
              account: "Nubank",
              single: true,
              repetition: {
                installments_quantity: 1,
                installment: 1,
              },
              coments: "",
            },
            {
              description: "Ajuste na API do sistema teste",
              isPaid: true,
              type: "revenue",
              category: "Barbearia",
              value: "30.00",
              payment_date: "2021-06-02T00:00:00+00:00",
              accrual_date: "2021-06-02T00:00:00+00:00",
              account: "Nubank",
              single: true,
              repetition: {
                installments_quantity: 1,
                installment: 1,
              },
              coments: "",
            },
          ],
        },
      ],
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const token = req.headers?.["x-access-token"];
    const transaction = req.body;

    if (!token)
      return res.status(401).json({
        code: 401,
        error: "Unauthorized",
        message: "No token provided.",
      });

    if (token === "invalid-token")
      return res.status(401).json({
        code: 401,
        error: "Unauthorized",
        message: "Invalid token provided.",
      });

    if (!transaction)
      return res.status(400).json({
        code: 400,
        error: "Bad Request",
        message: "No data provided.",
      });

    try {
      return res.status(201).json({
        transaction: {
          id: "i73hft-5dshs-0jeyfv-mntf45",
          account_id: "usidf-feufea-auegec-34ffu",
          user_id: "ur3df-fe234-a55gec-3412u",
          description: "Compras no extrabom",
          is_paid: true,
          type: "expense",
          category: "Supermercado",
          value: "348.00",
          payment_date: "2021-08-18T00:00:00+00:00",
          effective_date: "2021-08-18T00:00:00+00:00",
          single: true,
          repetition: {
            installments_quantity: 1,
            installment: 1,
          },
          comments: "",
        },
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        code: 500,
        error: 'Internal Error',
        message: 'An unexpected error has ocurred, please try again later'
      });
    }
  }
}
