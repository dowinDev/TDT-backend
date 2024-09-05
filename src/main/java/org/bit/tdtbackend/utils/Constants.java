package org.bit.tdtbackend.utils;

import lombok.experimental.UtilityClass;

import java.math.BigDecimal;
import java.util.Locale;

@UtilityClass
public class Constants {

    public static final String LOGIN_REGEX = "^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$";
    public static final String PHONE_REGEX = "^[1-9]\\d{9,14}$";
    public static final String EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    public static final Locale DEFAULT_LOCALE = Locale.ENGLISH;
    public static final int MAX_LOGIN_ATTEMPT = 5;
    public static final int MAX_BOOKING_APPOINTMENT = 3;
    public static final int DURATION_PER_SLOT = 30;
    public static final BigDecimal BONUS_PRICE = new BigDecimal(100);

    public enum RoleEnum {
        ADMIN, MEMBER, LECTURE
    }

    public enum sourceEnum {
        PHONE, GOOGLE, EMAIL
    }

    public enum workHourseTypeEnum {
        OPEN, CLOSE
    }

    public enum statusActionEnum {
        ACTIVE, INACTIVE
    }
}
