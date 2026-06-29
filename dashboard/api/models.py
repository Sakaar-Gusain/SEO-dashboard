import pandas as pd

month_names = {
    1: "Jan", 2: "Feb", 3: "Mar",
    4: "Apr", 5: "May", 6: "Jun",
    7: "Jul", 8: "Aug", 9: "Sep",
    10: "Oct", 11: "Nov", 12: "Dec"
}

def get_monthly_clicks(df):
    result = df.groupby('month')[['clicks', 'impressions']].sum().reset_index()
    result['month'] = result['month'].map(month_names)
    return result.to_dict(orient='records')

def month_click_line(df):
    result = df.groupby('month')['clicks'].sum().reset_index()
    result['month'] = result['month'].map(month_names)
    return result.to_dict(orient='records')

def get_worst_ranking(df):
    result = df.groupby('query')['position'].mean().round(1)
    result = result.sort_values(ascending=False).head(5)
    return result.reset_index().to_dict(orient='records')

def get_best_ctr_keywords(df):
    result = df.groupby('query')['ctr'].mean().round(4)
    result = result.sort_values(ascending=False).head(10)
    return result.reset_index().to_dict(orient='records')

def get_summary(df):
    return {
        "total_clicks": int(df['clicks'].sum()),
        "total_impressions": int(df['impressions'].sum()),
        "avg_position": round(float(df['position'].mean()), 1),
        "total_keywords": int(df['query'].nunique()),
        "date_range": f"{df['date'].min().date()} to {df['date'].max().date()}"
    }