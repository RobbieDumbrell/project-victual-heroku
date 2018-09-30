use victual;
db.dropDatabase();
db.user_food_items.insertMany(
    [{
        "name": "toast",
        "amount": "2",
        "measurement": "serving",
        "date": "2018-09-26",
        "details": {
            "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 7.5,
                "unit": "%"
            },
            "FAT": {
                "label": "Fat",
                "quantity": 13.8,
                "unit": "%"
            },
            "FASAT": {
                "label": "Saturated",
                "quantity": 25.16,
                "unit": "%"
            },
            "CHOCDF": {
                "label": "Carbs",
                "quantity": 8.91,
                "unit": "%"
            },
            "FIBTG": {
                "label": "Fiber",
                "quantity": 9.02,
                "unit": "%"
            },
            "PROCNT": {
                "label": "Protein",
                "quantity": 12.44,
                "unit": "%"
            },
            "NA": {
                "label": "Sodium",
                "quantity": 0.0004166666666666667,
                "unit": "%"
            },
            "CA": {
                "label": "Calcium",
                "quantity": 7.91,
                "unit": "%"
            },
            "MG": {
                "label": "Magnesium",
                "quantity": 0.06428571428571428,
                "unit": "%"
            },
            "K": {
                "label": "Potassium",
                "quantity": 0.07617021276595745,
                "unit": "%"
            },
            "FE": {
                "label": "Iron",
                "quantity": 10.91,
                "unit": "%"
            },
            "ZN": {
                "label": "Zinc",
                "quantity": 0.013636363636363636,
                "unit": "%"
            },
            "P": {
                "label": "Phosphorus",
                "quantity": 0.03142857142857143,
                "unit": "%"
            },
            "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 0,
                "unit": "%"
            },
            "VITC": {
                "label": "Vitamin C",
                "quantity": 0.09666666666666666,
                "unit": "%"
            },
            "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.025833333333333333,
                "unit": "%"
            },
            "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.05615384615384615,
                "unit": "%"
            },
            "NIA": {
                "label": "Niacin (B3)",
                "quantity": 0.0415625,
                "unit": "%"
            },
            "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 0.2823076923076923,
                "unit": "%"
            },
            "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 12.1,
                "unit": "%"
            },
            "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 0.77,
                "unit": "%"
            },
            "VITK1": {
                "label": "Vitamin K",
                "quantity": 2.88,
                "unit": "%"
            }
        }
    },
    {
        "name": "milk",
        "amount": "1",
        "measurement": "cup",
        "date": "2018-09-26",
        "details": {
            "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 6.29,
                "unit": "%"
            },
            "FAT": {
                "label": "Fat",
                "quantity": 10.31,
                "unit": "%"
            },
            "FASAT": {
                "label": "Saturated",
                "quantity": 19.23,
                "unit": "%"
            },
            "CHOCDF": {
                "label": "Carbs",
                "quantity": 3.3,
                "unit": "%"
            },
            "FIBTG": {
                "label": "Fiber",
                "quantity": 0,
                "unit": "%"
            },
            "PROCNT": {
                "label": "Protein",
                "quantity": 12.99,
                "unit": "%"
            },
            "NA": {
                "label": "Sodium",
                "quantity": 3.70,
                "unit": "%"
            },
            "CA": {
                "label": "Calcium",
                "quantity": 23.31,
                "unit": "%"
            },
            "MG": {
                "label": "Magnesium",
                "quantity": 4.91,
                "unit": "%"
            },
            "K": {
                "label": "Potassium",
                "quantity": 5.79,
                "unit": "%"
            },
            "FE": {
                "label": "Iron",
                "quantity": 0.34,
                "unit": "%"
            },
            "ZN": {
                "label": "Zinc",
                "quantity": 6.94,
                "unit": "%"
            },
            "P": {
                "label": "Phosphorus",
                "quantity": 3.96,
                "unit": "%"
            },
            "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 0.42,
                "unit": "%"
            },
            "VITC": {
                "label": "Vitamin C",
                "quantity": 12.18,
                "unit": "%"
            },
            "VITD": {
                "label": "Vitamin D",
                "quantity": 17.88,
                "unit": "%"
            },
            "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 3.255,
                "unit": "%"
            },
            "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 7.075384615384614,
                "unit": "%"
            },
            "NIA": {
                "label": "Niacin (B3)",
                "quantity": 5.236875,
                "unit": "%"
            },
            "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 35.57076923076923,
                "unit": "%"
            },
            "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 6.3,
                "unit": "%"
            },
            "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 0.84,
                "unit": "%"
            },
            "VITK1": {
                "label": "Vitamin K",
                "quantity": 0.525,
                "unit": "%"
            }
        }
    },
    {
        "name": "noodles",
        "amount": "1",
        "measurement": "serving",
        "date": "2018-09-26",
        "details": {
            "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 38.4,
                "unit": "%"
            },
            "CHOLE": {
                "label": "Cholesterol",
                "quantity": 56,
                "unit": "%"
            },
            "FAT": {
                "label": "Fat",
                "quantity": 13.66,
                "unit": "%"
            },
            "FASAT": {
                "label": "Saturated",
                "quantity": 11.8,
                "unit": "%"
            },
            "CHOCDF": {
                "label": "Carbs",
                "quantity": 47.51,
                "unit": "%"
            },
            "FIBTG": {
                "label": "Fiber",
                "quantity": 26.4,
                "unit": "%"
            },
            "PROCNT": {
                "label": "Protein",
                "quantity": 56.64,
                "unit": "%"
            },
            "NA": {
                "label": "Sodium",
                "quantity": 1.75,
                "unit": "%"
            },
            "CA": {
                "label": "Calcium",
                "quantity": 7,
                "unit": "%"
            },
            "MG": {
                "label": "Magnesium",
                "quantity": 27.62,
                "unit": "%"
            },
            "K": {
                "label": "Potassium",
                "quantity": 10.38,
                "unit": "%"
            },
            "FE": {
                "label": "Iron",
                "quantity": 44.56,
                "unit": "%"
            },
            "ZN": {
                "label": "Zinc",
                "quantity": 34.91,
                "unit": "%"
            },
            "P": {
                "label": "Phosphorus",
                "quantity": 68.86,
                "unit": "%"
            },
            "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 3.78,
                "unit": "%"
            },
            "VITC": {
                "label": "Vitamin C",
                "quantity": 12.18,
                "unit": "%"
            },
            "VITD": {
                "label": "Vitamin D",
                "quantity": 17.88,
                "unit": "%"
            },
            "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 188.81,
                "unit": "%"
            },
            "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 65.54,
                "unit": "%"
            },
            "VITB12": {
                "label": "Vitamin B12",
                "quantity": 24.17,
                "unit": "%"
            },
            "NIA": {
                "label": "Niacin (B3)",
                "quantity": 104.03,
                "unit": "%"
            },
            "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 33.32,
                "unit": "%"
            },
            "VITD": {
                "label": "Vitamin D",
                "quantity": 4,
                "unit": "%"
            },
            "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 185.4,
                "unit": "%"
            },
            "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 4.93,
                "unit": "%"
            },
            "VITK1": {
                "label": "Vitamin K",
                "quantity": 0.83,
                "unit": "%"
            }
        }
    },
    {
        "name": "toast",
        "amount": "2",
        "measurement": "serving",
        "date": "2018-09-25",
        "details": {
            "ENERC_KCAL": {
                "label": "Energy",
                "quantity": 7.5,
                "unit": "%"
            },
            "FAT": {
                "label": "Fat",
                "quantity": 13.8,
                "unit": "%"
            },
            "FASAT": {
                "label": "Saturated",
                "quantity": 25.16,
                "unit": "%"
            },
            "CHOCDF": {
                "label": "Carbs",
                "quantity": 8.91,
                "unit": "%"
            },
            "FIBTG": {
                "label": "Fiber",
                "quantity": 9.02,
                "unit": "%"
            },
            "PROCNT": {
                "label": "Protein",
                "quantity": 12.44,
                "unit": "%"
            },
            "NA": {
                "label": "Sodium",
                "quantity": 0.0004166666666666667,
                "unit": "%"
            },
            "CA": {
                "label": "Calcium",
                "quantity": 7.91,
                "unit": "%"
            },
            "MG": {
                "label": "Magnesium",
                "quantity": 0.06428571428571428,
                "unit": "%"
            },
            "K": {
                "label": "Potassium",
                "quantity": 0.07617021276595745,
                "unit": "%"
            },
            "FE": {
                "label": "Iron",
                "quantity": 10.91,
                "unit": "%"
            },
            "ZN": {
                "label": "Zinc",
                "quantity": 0.013636363636363636,
                "unit": "%"
            },
            "P": {
                "label": "Phosphorus",
                "quantity": 0.03142857142857143,
                "unit": "%"
            },
            "VITA_RAE": {
                "label": "Vitamin A",
                "quantity": 0,
                "unit": "%"
            },
            "VITC": {
                "label": "Vitamin C",
                "quantity": 0.09666666666666666,
                "unit": "%"
            },
            "THIA": {
                "label": "Thiamin (B1)",
                "quantity": 0.025833333333333333,
                "unit": "%"
            },
            "RIBF": {
                "label": "Riboflavin (B2)",
                "quantity": 0.05615384615384615,
                "unit": "%"
            },
            "NIA": {
                "label": "Niacin (B3)",
                "quantity": 0.0415625,
                "unit": "%"
            },
            "VITB6A": {
                "label": "Vitamin B6",
                "quantity": 0.2823076923076923,
                "unit": "%"
            },
            "FOLDFE": {
                "label": "Folate equivalent (total)",
                "quantity": 12.1,
                "unit": "%"
            },
            "TOCPHA": {
                "label": "Vitamin E",
                "quantity": 0.77,
                "unit": "%"
            },
            "VITK1": {
                "label": "Vitamin K",
                "quantity": 2.88,
                "unit": "%"
            }
        }
    },
        {
            "name": "banana",
            "amount": "1",
            "measurement": "whole",
            "date": "2018-09-25",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 0.0445,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.005076923076923077,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 0.005600000000000001,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 0.07613333333333333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.005,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.014444444444444446,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.03142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "milk",
            "amount": "1",
            "measurement": "cup",
            "date": "2018-09-25",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 6.29,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 10.31,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 12.99,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 3.70,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                }
            }
        },
        {
            "name": "chicken curry",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-25",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 26.88,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 57.29,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 93,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 7.29,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 32.05,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 62.5,
                    "unit": "%"
                }
            }
        },
        {
            "name": "chocolate",
            "amount": "1",
            "measurement": "ounce",
            "date": "2018-09-25",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 6.8,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 13.8,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 25.16,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 6.04,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.91,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 4.13,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.04142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "banana",
            "amount": "1",
            "measurement": "whole",
            "date": "2018-09-24",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 0.0445,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.005076923076923077,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 0.005600000000000001,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 0.07613333333333333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.005,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.014444444444444446,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.03142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "milk",
            "amount": "1",
            "measurement": "cup",
            "date": "2018-09-24",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 6.29,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 10.31,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 12.99,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 3.70,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                }
            }
        },
        {
            "name": "beef stew",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-24",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 30,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 27,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 45,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 93,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 7.29,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 101,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 62.5,
                    "unit": "%"
                }
            }
        },
        {
            "name": "apple pie",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-24",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 19.88,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 28.85,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 22.88,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 18.55,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 7.2,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 13.19,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 1.05,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 2.5,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 2.52,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 9.33,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 2.59,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 6,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1.83,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 2.83,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 18.5,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 12.35,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 3.69,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 14.25,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "chocolate",
            "amount": "1",
            "measurement": "ounce",
            "date": "2018-09-24",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 6.8,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 13.8,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 25.16,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 6.04,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.91,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 4.13,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.04142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "porridge",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-23",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 14.53,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 10.16,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 9.28,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 16.5,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1.42,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 23.45,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 22.33,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 5.89,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 20.14,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 25.86,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 9.56,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 13.32,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 18.84,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 47.02,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 10.92,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 2.07,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 27.25,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 18.54,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 4.19,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 12.68,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 16.98,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 7.98,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 7.91,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 1.19,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.77,
                    "unit": "%"
                }
            }
        },
        {
            "name": "chocolate",
            "amount": "1",
            "measurement": "ounce",
            "date": "2018-09-23",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 6.8,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 13.8,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 25.16,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 6.04,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.91,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 4.13,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.04142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "chicken curry",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-23",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 26.88,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 57.29,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 93,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 7.29,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 32.05,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 62.5,
                    "unit": "%"
                }
            }
        },
        {
            "name": "banana",
            "amount": "1",
            "measurement": "whole",
            "date": "2018-09-23",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 0.0445,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.005076923076923077,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 0.005600000000000001,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 0.07613333333333333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.005,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.014444444444444446,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.03142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "banana",
            "amount": "1",
            "measurement": "whole",
            "date": "2018-09-22",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 0.0445,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.005076923076923077,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 0.005600000000000001,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 0.07613333333333333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.005,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.014444444444444446,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.03142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "porridge",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-22",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 14.53,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 10.16,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 9.28,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 16.5,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1.42,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 23.45,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 22.33,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 5.89,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 20.14,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 25.86,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 9.56,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 13.32,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 18.84,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 47.02,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 10.92,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 2.07,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 27.25,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 18.54,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 4.19,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 12.68,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 16.98,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 7.98,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 7.91,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 1.19,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.77,
                    "unit": "%"
                }
            }
        },
        {
            "name": "apple pie",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-22",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 19.88,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 28.85,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 22.88,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 18.55,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 7.2,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 13.19,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 1.05,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 2.5,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 2.52,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 9.33,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 2.59,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 6,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1.83,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 2.83,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 18.5,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 12.35,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 3.69,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 14.25,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        },
        {
            "name": "chicken curry",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-22",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 26.88,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 57.29,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 93,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 7.29,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 32.05,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 62.5,
                    "unit": "%"
                }
            }
        },
        {
            "name": "milk",
            "amount": "1",
            "measurement": "cup",
            "date": "2018-09-21",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 6.29,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 10.31,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 12.99,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 3.70,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                }
            }
        },
        {
            "name": "toast",
            "amount": "2",
            "measurement": "serving",
            "date": "2018-09-26",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 7.5,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 13.8,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 25.16,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 8.91,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 9.02,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 12.44,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 7.91,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 10.91,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.03142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 12.1,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.77,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 2.88,
                    "unit": "%"
                }
            }
        },
        {
            "name": "beef stew",
            "amount": "1",
            "measurement": "serving",
            "date": "2018-09-21",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 30,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 27,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 45,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 19.23,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 3.3,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 93,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 7.29,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 23.31,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 4.91,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.79,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.34,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 6.94,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3.96,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.42,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 12.18,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 17.88,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 101,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.255,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 7.075384615384614,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 5.236875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 35.57076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.3,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.84,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.525,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 62.5,
                    "unit": "%"
                }
            }
        },
        {
            "name": "banana",
            "amount": "1",
            "measurement": "whole",
            "date": "2018-09-21",
            "details": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 0.0445,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.005076923076923077,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 0.005600000000000001,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 0.07613333333333333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.10400000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 0.0218,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.0004166666666666667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 0.005,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 0.06428571428571428,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 0.07617021276595745,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 0.014444444444444446,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 0.013636363636363636,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 0.03142857142857143,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.0033333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.09666666666666666,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.025833333333333333,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.05615384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 0.0415625,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.2823076923076923,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 0.05,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.006666666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0.004166666666666667,
                    "unit": "%"
                }
            }
        }
    ]);
