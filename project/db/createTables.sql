-- Creating tables for speechglobal db

-- Audience Table
CREATE TABLE Audience (
    AudienceUserID INTEGER PRIMARY KEY AUTOINCREMENT,
    AudienceEmail VARCHAR(255) NOT NULL UNIQUE,
    AudiencePassword VARCHAR(255) NOT NULL,
    CurrentChannel INTEGER,
    FOREIGN KEY (CurrentChannel) REFERENCES Channel(ChannelID)
);

-- Channel Table
CREATE TABLE Channel (
    ChannelID INTEGER PRIMARY KEY AUTOINCREMENT,
    ChannelEmail VARCHAR(255) NOT NULL UNIQUE,
    ChannelPassword VARCHAR(255) NOT NULL,
    ChannelName VARCHAR(255) NOT NULL UNIQUE,
    IsActive BOOLEAN NOT NULL DEFAULT 0,
    TimeLeft INTEGER NOT NULL DEFAULT 0,
    AccountTier INTEGER NOT NULL DEFAULT 0,
    ChannelImageURL TEXT
);

-- Language Table
CREATE TABLE Language (
    LanguageID INTEGER PRIMARY KEY AUTOINCREMENT,
    LanguageName VARCHAR(50) NOT NULL UNIQUE,
    LocaleCode VARCHAR(10) NOT NULL UNIQUE
);

-- ChannelDefaultLanguage Table
CREATE TABLE ChannelDefaultLanguage (
    ChannelID INTEGER NOT NULL,
    LanguageID INTEGER NOT NULL,
    PRIMARY KEY (ChannelID, LanguageID),
    FOREIGN KEY (ChannelID) REFERENCES Channel(ChannelID),
    FOREIGN KEY (LanguageID) REFERENCES Language(LanguageID)
);

-- Post Table
CREATE TABLE Post (
    PostID INTEGER PRIMARY KEY AUTOINCREMENT,
    ChannelID INTEGER NOT NULL,
    PostTitle VARCHAR(255) NOT NULL,
    FOREIGN KEY (ChannelID) REFERENCES Channel(ChannelID)
);

-- PostContent Table
CREATE TABLE PostContent (
    ContentID INTEGER PRIMARY KEY AUTOINCREMENT,
    PostID INTEGER NOT NULL,
    LanguageID INTEGER NOT NULL,
    AudioURL TEXT,
    VideoURL TEXT,
    FOREIGN KEY (PostID) REFERENCES Post(PostID),
    FOREIGN KEY (LanguageID) REFERENCES Language(LanguageID)
);

-- AudiencePreferredLanguage Table
CREATE TABLE AudiencePreferredLanguage (
    AudienceUserID INTEGER NOT NULL,
    LanguageID INTEGER NOT NULL,
    PRIMARY KEY (AudienceUserID, LanguageID),
    FOREIGN KEY (AudienceUserID) REFERENCES Audience(AudienceUserID),
    FOREIGN KEY (LanguageID) REFERENCES Language(LanguageID)
);

-- AudiencePreferredChannel Table
CREATE TABLE AudiencePreferredChannel (
    AudienceUserID INTEGER NOT NULL,
    ChannelID INTEGER NOT NULL,
    PRIMARY KEY (AudienceUserID, ChannelID),
    FOREIGN KEY (AudienceUserID) REFERENCES Audience(AudienceUserID),
    FOREIGN KEY (ChannelID) REFERENCES Channel(ChannelID)
);
