import CompanyModel from "./CompanyModel";
export enum CouponCategory {
    FOOD = "FOOD",
    ELECTRICITY = "ELECTRICITY",
    RESTAURANT = "RESTAURANT",
    VACATION = "VACATION",
    GARMENT = "GARMENT",
    BOOK = "BOOK"
}

export class CouponModel {
id: number;
price: number;
company: CompanyModel
amount: number;
title: string;
description: string;
image: string;
startDate: Date;
endDate: Date;
category: CouponCategory;
}
