import { formData } from "../../pages/StudentApplication";

const cohortId = 'AKd12ds3'
const testData = [
    {
        id: 'AKd123',
        name: 'cohort 9',
        type: 'development'
    },
    {
      id: 'AKd12ds3',
      name: 'cohort 8',
      type: 'design'
    },
    {
        id: 'AKd123ss',
        name: 'cohort 10',
        type: 'development'
    }
];

describe("Filters for Correct Cohort Data", () => {
    it("returns only one object", () => {
        expect(formData(testData, cohortId).length).toEqual(1)});

    it("returns an array with only one object with id equal to cohortId", () => {
        expect(formData(testData, cohortId)).toEqual( [{
            id: 'AKd12ds3',
            name: 'cohort 8',
            type: 'design'
        }]
        )
    });
    it("returns an array with only one object with id equal to cohortId", () => {
        expect(formData(testData, cohortId)).not.toEqual( [{
            id: 'AKd123ss',
            name: 'cohort 10',
            type: 'development'
        }]
        )
    });
});
