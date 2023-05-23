# Assuming two and a half years start from January 1st of a given year
def is_leap_year(year):
    # Return True if year is a leap year, False otherwise
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def average_days(year):
    # Return the average number of days in two and a half years starting from January 1st of year
    days = 0 # Total number of days
    count = 0 # Number of possible cases
    for n in range(4): # Loop over four possible leap years
        y = year + n # Current year
        if is_leap_year(y): # If current year is a leap year
            days += 912.5 # Add 912.5 days to total days
        else: # If current year is not a leap year
            days += 912 # Add 912 days to total days
        count += 1 # Increase count by one
    return days / count # Return average number of days

# Test case: print average number of days for two and a half years starting from January 1st, 2022 
print(average_days(2022)) 