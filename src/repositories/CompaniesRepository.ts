/// <reference path="../../typings/tsd.d.ts" />

import * as jquery from "jquery";

export interface Company {
    Id: number;
    Name: string;
    Address: string;
    Phone: string;
    WebSite: string;

    MapCode: string;
    ImageUrl: string;
    LogoUrl: string;
    WorkingHours: string;
    Description: string;

    Ranking: number;
    RankingDescription: string;

}
export interface ICompaniesRepository {
    loadCompanies(): Array<Company>;
    loadCompany(id: number): Company;
}
/*
export class CompaniesRepository implements ICompaniesRepository {

     getCompanies(): Array<Company> {
        return $.getJSON("http://localhost:2985/api/companies").done().fail();
            
        

    }


    getCompany(id: number): Company {
        return null;
    }
} */