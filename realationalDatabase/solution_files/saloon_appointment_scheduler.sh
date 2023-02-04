#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n Welcome to My Salon, how can I help you?\n"

BOOK_APPOINTMENT(){
  read SERVICE_ID_SELECTED
  # check if selected id is a number or not
  if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]]
  then
    echo -e "\nI could not find that service. What would you like today?"
    MAIN_MENU
  fi
  # check if its a valid id 
  SELECTED_SERVICE=$($PSQL "select name from services where service_id = '$SERVICE_ID_SELECTED'")
  if [[ -z $SELECTED_SERVICE ]]
  then
  echo -e "\nI could not find that service. What would you like today?"
    MAIN_MENU
  fi
    echo "What's your phone number?"
    read CUSTOMER_PHONE
    CUSTOMER_NAME=$($PSQL "select name from customers where phone = '$CUSTOMER_PHONE'")
    if [[ -z $CUSTOMER_NAME ]]
    then
      echo -e "\nI don't have a record for that phone number, what's your name?"
      read CUSTOMER_NAME
      INSERT_CUSTOMER=$($PSQL "insert into customers(phone,name) values('$CUSTOMER_PHONE','$CUSTOMER_NAME')")
    fi
    echo -e "\nWhat time would you like your $SELECTED_SERVICE, $CUSTOMER_NAME?"
    read SERVICE_TIME
    # echo -e "\n$SERVICE_TIME"
    CUSTOMER_ID=$($PSQL "select customer_id from customers where name='$CUSTOMER_NAME'")
    SET_APPOINTMENT=$($PSQL "insert into appointments(time,customer_id,service_id) values('$SERVICE_TIME',$CUSTOMER_ID,$SERVICE_ID_SELECTED)")
    echo -e "\nI have put you down for a$SELECTED_SERVICE at $SERVICE_TIME, $CUSTOMER_NAME."
    exit
  }

MAIN_MENU(){
  SERVICES_LIST=$($PSQL "select * from services")
  echo "$SERVICES_LIST" | while IFS=' | ' read SERVICE_ID NAME
  do
    echo "$SERVICE_ID) $NAME"
  done
   BOOK_APPOINTMENT
  }

  MAIN_MENU

  