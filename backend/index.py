from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import models
import pandas as pd
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                   "https://seo-analysis-dashboard.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def parse_dataframe(contents: bytes, filename: str) -> pd.DataFrame:
    if filename.endswith(".csv"):
        df = pd.read_csv(io.BytesIO(contents))
    else:
        df = pd.read_excel(io.BytesIO(contents))

    # Normalize columns FIRST before anything else
    df.columns = df.columns.str.strip().str.lower()

    required = {"date", "query", "page", "clicks", "impressions", "ctr", "position"}
    missing = required - set(df.columns)
    if missing:
        raise HTTPException(status_code=400, detail=f"Missing columns: {missing}")

    df['date'] = pd.to_datetime(df['date'])
    df['month'] = df['date'].dt.month

    return df


@app.get("/")
def home():
    return {"message": "SEO Dashboard API is running"}



@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not (file.filename.endswith(".csv") or file.filename.endswith(".xlsx")):
        raise HTTPException(status_code=400, detail="Only .csv and .xlsx files are supported")

    contents = await file.read()
    df = parse_dataframe(contents, file.filename)

    return {
        "summary": models.get_summary(df),
        "monthly_clicks": models.get_monthly_clicks(df),
        "month_click_line": models.month_click_line(df),
        "best_ctr": models.get_best_ctr_keywords(df),
        "worst_ranking": models.get_worst_ranking(df),
    }