explain analyze SELECT * FROM store_sales,customer WHERE store_sales.ext_discount_amt <= 0.0 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_sales_price <= 484.38 AND store_sales.ext_sales_price >= 0.0 AND store_sales.ext_wholesale_cost <= 2461.8 AND store_sales.ext_wholesale_cost >= 190.5 AND store_sales.ext_list_price <= 1033.6 AND store_sales.ext_list_price >= 705.12 AND store_sales.ext_tax <= 61.19 AND store_sales.ext_tax >= -1.0 AND store_sales.customer_sk=customer.customer_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.sales_price <= 2.8 AND store_sales.sales_price >= -1.0 AND store_sales.ext_tax <= 263.54 AND store_sales.ext_tax >= 23.33 AND store_sales.net_paid <= 7085.71 AND store_sales.net_paid >= 6259.5 AND store_sales.net_profit <= -1.0 AND store_sales.net_profit >= -81.36 AND store.company_id <= 767 AND store.company_id >= 226 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,item WHERE store_sales.ext_wholesale_cost <= 3957.0 AND store_sales.ext_wholesale_cost >= 71.5 AND store_sales.net_paid <= 4709.88 AND store_sales.net_paid >= 1245.45 AND item.class_id <= 15.0 AND item.class_id >= 11.0 AND item.manufact_id <= 117.0 AND item.manufact_id >= 3.0 AND store_sales.wholesale_cost=item.wholesale_cost;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.list_price <= 186.33 AND store_sales.list_price >= 47.88 AND store_sales.ext_discount_amt <= 0.0 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_wholesale_cost <= 699.75 AND store_sales.ext_wholesale_cost >= -1.0 AND store_sales.net_paid <= 2432.52 AND store_sales.net_paid >= -1.0 AND store_sales.net_paid_inc_tax <= 1734.56 AND store_sales.net_paid_inc_tax >= 55.36 AND store.devision_id <= 1 AND store.devision_id >= 1 AND store.company_id <= 226 AND store.company_id >= 27 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM item,promotion WHERE item.class_id <= 12.0 AND item.class_id >= 3.0 AND item.item_sk=promotion.item_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.sales_price <= 15.21 AND store_sales.sales_price >= 7.83 AND store_sales.ext_discount_amt <= 0.0 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_list_price <= 4467.96 AND store_sales.ext_list_price >= 892.32 AND store_sales.ext_tax <= 42.22 AND store_sales.ext_tax >= 0.0 AND store_sales.net_profit <= 471.2 AND store_sales.net_profit >= 37.1 AND store.floor_space <= 9294113 AND store.floor_space >= 5250760 AND store.market_id <= 10 AND store.market_id >= 8 AND store.company_id <= 255 AND store.company_id >= 175 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,customer WHERE store_sales.net_profit <= 3217.75 AND store_sales.net_profit >= 14.4 AND store_sales.customer_sk=customer.customer_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.sales_price <= 110.89 AND store_sales.sales_price >= 0.0 AND store_sales.ext_tax <= 346.43 AND store_sales.ext_tax >= 0.75 AND store_sales.ext_coupon_amt <= 31.9 AND store_sales.ext_coupon_amt >= 28.51 AND store_sales.net_paid <= 1249.44 AND store_sales.net_paid >= 742.06 AND store_sales.net_profit <= 1306.55 AND store_sales.net_profit >= 272.88 AND store.market_id <= 8 AND store.market_id >= 4 AND store.tax_percentage <= 0.08 AND store.tax_percentage >= 0.03 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.list_price <= 116.36 AND store_sales.list_price >= 69.63 AND store_sales.sales_price <= 24.46 AND store_sales.sales_price >= 21.08 AND store_sales.ext_discount_amt <= 0.0 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_wholesale_cost <= 541.8 AND store_sales.ext_wholesale_cost >= 184.68 AND store_sales.ext_coupon_amt <= 0.0 AND store_sales.ext_coupon_amt >= 0.0 AND store_sales.net_paid_inc_tax <= 470.01 AND store_sales.net_paid_inc_tax >= 142.11 AND store.company_id <= 175 AND store.company_id >= 27 AND store.tax_percentage <= 0.03 AND store.tax_percentage >= 0.01 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,customer WHERE store_sales.net_paid <= 3337.88 AND store_sales.net_paid >= -1.0 AND store_sales.customer_sk=customer.customer_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.quantity <= 73.0 AND store_sales.quantity >= 31.0 AND store_sales.net_paid <= 1109.16 AND store_sales.net_paid >= 1095.13 AND store.company_id <= 175 AND store.company_id >= 175 AND store.tax_percentage <= 0.11 AND store.tax_percentage >= 0.03 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.list_price <= 83.75 AND store_sales.list_price >= 24.37 AND store_sales.ext_list_price <= 11362.0 AND store_sales.ext_list_price >= 4820.36 AND store.tax_percentage <= 0.08 AND store.tax_percentage >= 0.03 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,item WHERE store_sales.quantity <= 86.0 AND store_sales.quantity >= 65.0 AND store_sales.ext_list_price <= 2328.82 AND store_sales.ext_list_price >= -1.0 AND store_sales.ext_coupon_amt <= 1738.07 AND store_sales.ext_coupon_amt >= 0.0 AND store_sales.net_paid <= 3484.96 AND store_sales.net_paid >= 107.3 AND store_sales.net_profit <= 1111.36 AND store_sales.net_profit >= -7343.06 AND store_sales.item_sk=item.item_sk;
explain analyze SELECT * FROM store_sales,item WHERE store_sales.ext_coupon_amt <= 0.0 AND store_sales.ext_coupon_amt >= 0.0 AND item.class_id <= 5.0 AND item.class_id >= 4.0 AND store_sales.item_sk=item.item_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.quantity <= 88.0 AND store_sales.quantity >= 83.0 AND store_sales.ext_discount_amt <= 38.74 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.net_paid_inc_tax <= 10222.24 AND store_sales.net_paid_inc_tax >= 6501.49 AND store_sales.net_profit <= 247.95 AND store_sales.net_profit >= -752.57 AND store.floor_space <= 9026222 AND store.floor_space >= 6995995 AND store.company_id <= 255 AND store.company_id >= 226 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM item,promotion WHERE item.manufact_id <= 674.0 AND item.manufact_id >= 397.0 AND item.item_sk=promotion.item_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.quantity <= 72.0 AND store_sales.quantity >= 56.0 AND store_sales.ext_discount_amt <= 26.3 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.net_paid <= 383.44 AND store_sales.net_paid >= -1.0 AND store.market_id <= 8 AND store.market_id >= 6 AND store.devision_id <= 1 AND store.devision_id >= 1 AND store.tax_percentage <= 0.03 AND store.tax_percentage >= 0.03 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.ext_coupon_amt <= 0.0 AND store_sales.ext_coupon_amt >= 0.0 AND store.number_employees <= 294 AND store.number_employees >= 271 AND store.market_id <= 6 AND store.market_id >= 2 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,customer WHERE store_sales.customer_sk=customer.customer_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.list_price <= 101.07 AND store_sales.list_price >= 80.67 AND store_sales.net_paid_inc_tax <= 3087.14 AND store_sales.net_paid_inc_tax >= 1766.49 AND store.company_id <= 27 AND store.company_id >= 27 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,item WHERE item.brand_id <= 8015009.0 AND item.brand_id >= 3004001.0 AND store_sales.item_sk=item.item_sk;
explain analyze SELECT * FROM store_sales,item WHERE store_sales.sales_price <= 58.25 AND store_sales.sales_price >= 28.09 AND store_sales.net_profit <= -70.15 AND store_sales.net_profit >= -7151.6 AND item.manufact_id <= 291.0 AND item.manufact_id >= 207.0 AND store_sales.item_sk=item.item_sk;
explain analyze SELECT * FROM store_sales,store WHERE store.floor_space <= 9294113 AND store.floor_space >= 6995995 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.ext_discount_amt <= 19.29 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_wholesale_cost <= 4628.91 AND store_sales.ext_wholesale_cost >= 1558.22 AND store_sales.net_paid_inc_tax <= 4628.34 AND store_sales.net_paid_inc_tax >= -1.0 AND store_sales.net_profit <= -1.0 AND store_sales.net_profit >= -1560.06 AND store.devision_id <= 1 AND store.devision_id >= 1 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,customer WHERE store_sales.ext_sales_price <= 1660.68 AND store_sales.ext_sales_price >= 1402.5 AND store_sales.ext_coupon_amt <= 0.0 AND store_sales.ext_coupon_amt >= 0.0 AND store_sales.customer_sk=customer.customer_sk;
explain analyze SELECT * FROM store_sales,store WHERE store_sales.quantity <= 98.0 AND store_sales.quantity >= 97.0 AND store.floor_space <= 9078805 AND store.floor_space >= 5285950 AND store_sales.store_sk=store.store_sk;
explain analyze SELECT * FROM store_sales,customer WHERE customer.birth_day <= 19.0 AND customer.birth_day >= 5.0 AND store_sales.customer_sk=customer.customer_sk;
explain analyze SELECT * FROM store_sales,item WHERE store_sales.ext_discount_amt <= 1721.45 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_wholesale_cost <= 4152.06 AND store_sales.ext_wholesale_cost >= 648.72 AND store_sales.net_paid <= 654.74 AND store_sales.net_paid >= 392.16 AND item.brand_id <= 10003008.0 AND item.brand_id >= 5004002.0 AND store_sales.wholesale_cost=item.wholesale_cost;
explain analyze SELECT * FROM item,promotion WHERE item.brand_id <= 7002001.0 AND item.brand_id >= 3002001.0 AND promotion.response_target <= 1.0 AND promotion.response_target >= 1.0 AND item.item_sk=promotion.item_sk;
explain analyze SELECT * FROM store_sales,item WHERE store_sales.quantity <= 60.0 AND store_sales.quantity >= 52.0 AND store_sales.ext_discount_amt <= 1747.76 AND store_sales.ext_discount_amt >= 0.0 AND store_sales.ext_sales_price <= 1750.0 AND store_sales.ext_sales_price >= 981.72 AND store_sales.ext_list_price <= 8978.76 AND store_sales.ext_list_price >= 3171.35 AND store_sales.net_paid <= 2550.34 AND store_sales.net_paid >= 76.7 AND store_sales.net_profit <= -123.3 AND store_sales.net_profit >= -636.35 AND item.brand_id <= 10016004.0 AND item.brand_id >= 8007001.0 AND store_sales.item_sk=item.item_sk;
