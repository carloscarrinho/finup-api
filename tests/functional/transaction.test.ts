describe("Transaction Functional Tests", () => {
  const endpoint = "/transactions";
  const tokenName = "x-access-token";
  const validUserToken = "valid-user-token";
  const invalidUserToken = "invalid-token";

  describe("When getting all transactions", () => {
    it("should return a list of transactions for an authenticated user", async () => {
      // when
      const response = await global.testRequest
        .get(endpoint)
        .set("x-access-token", validUserToken);
      // then
      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        expect.objectContaining({
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
        })
      );
    });

    it("should return 401 when user token is invalid", async () => {
      // GIVEN
      const token = "invalid-token";
      // WHEN
      const response = await global.testRequest
        .get(endpoint)
        .set(tokenName, token);
      // THEN
      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        code: 401,
        error: "Unauthorized",
        message: "Invalid token provided.",
      });
    });

    it("should return 401 when user token was not provided", async () => {
      // WHEN
      const response = await global.testRequest.get(endpoint);
      // THEN
      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        code: 401,
        error: "Unauthorized",
        message: "No token provided.",
      });
    });
  });

  describe("When creating a new transaction", () => {
    it("should create a new transaction successfully when request is ok", async () => {
      // GIVEN
      // WHEN
      const response = await global.testRequest
        .post(endpoint)
        .set("x-access-token", validUserToken)
        .send({
          transaction: {
            account_id: "usidf-feufea-auegec-34ffu",
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

      // THEN
      expect(response.status).toBe(201);
      expect(response.body).toEqual(
        expect.objectContaining({
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
        })
      );
    });

    it("should return 401 when user token is invalid", async () => {
      // WHEN
      const response = await global.testRequest
        .post(endpoint)
        .set(tokenName, invalidUserToken)
        .send({
          transaction: {
            account_id: "usidf-feufea-auegec-34ffu",
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

      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        code: 401,
        error: "Unauthorized",
        message: "Invalid token provided.",
      });
    });

    it("should return 401 when user token was not provided", async () => {
      // WHEN
      const response = await global.testRequest
        .post(endpoint)
        .send({
          transaction: {
            account_id: "usidf-feufea-auegec-34ffu",
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

      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        code: 401,
        error: "Unauthorized",
        message: "No token provided.",
      });
    });
  });
});
