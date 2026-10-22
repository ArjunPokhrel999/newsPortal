import json
import os

def check_json():
    filename = 'news.json'
    
    print("=" * 55)
    print("🔍 NEWS.JSON VALIDATION & DATA CHECKER")
    print("=" * 55)

    if not os.path.exists(filename):
        print(f"❌ Error: File '{filename}' not found!")
        print("Please ensure news.json is in the current directory.")
        return

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
            print("✅ Status: news.json syntax is 100% valid!\n")
            print(f"📊 Total News Items: {len(data)}\n")
            
            for idx, item in enumerate(data, start=1):
                print(f"--------------------------------------------------")
                print(f" 📰 Article #{idx}")
                print(f" 📌 ID       : {item.get('id', 'N/A')}")
                print(f" 🏷️  Category : {item.get('category', 'N/A')}")
                print(f" 📝 Title    : {item.get('title', 'N/A')}")
                print(f" 🖼️  Image    : {item.get('img', 'N/A')}")
                print(f" 💬 Summary  : {item.get('desc', '')[:60]}...")
            
            print(f"--------------------------------------------------")
            print("\n🎉 news.json is working perfectly! No issues fetching this data.")

    except json.JSONDecodeError as e:
        print("❌ JSON Syntax Error: Missing comma, quote, or bracket in news.json!")
        print(f" Details: {e}")
    except Exception as e:
        print(f"❌ Unexpected Error: {e}")

    print("=" * 55)

if __name__ == "__main__":
    check_json()
